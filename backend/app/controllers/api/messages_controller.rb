module Api
  class MessagesController < ApplicationController
    before_action :authenticate_user!

    def create
      message = current_user.sent_messages.build(message_params)
      if message.save
        render json: format_message(message), status: :created
      else
        render json: { errors: message.errors.full_messages }, status: :unprocessable_entity
      end
    end

    def sent
      messages = current_user.sent_messages.includes(:receiver, :sender)
      render json: { messages: messages.map { |message| format_message(message) } }
    end

    def received
      messages = current_user.received_messages.includes(:sender, :receiver)
      render json: { messages: messages.map { |message| format_message(message) } }
    end

    private

    def current_user
      @current_user ||= User.find_by(id: session[:user_id])
    end

    def authenticate_user!
      render json: { error: 'Unauthorized' }, status: :unauthorized unless current_user
    end

    def message_params
      params.require(:message).permit(:receiver_id, :content)
    end

    def format_message(message)
      {
        id: message.id,
        content: message.content,
        company: {
          id: message.sender.id,
          name: message.sender.name
        },
        intern: {
          id: message.receiver.id,
          name: message.receiver.name
        },
        created_at: message.created_at
      }
    end
  end
end
