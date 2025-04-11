module Api
  class MessagesController < ApplicationController
    before_action :authenticate_user!

    def index
      messages = case current_user.role
                when 'intern'
                  current_user.received_messages.includes(:sender)
                when 'company'
                  current_user.sent_messages.includes(:receiver)
                end

      render json: { messages: messages.map { |msg| format_message(msg) } }
    end

    def show
      message = Message.find(params[:id])
      render json: format_message(message)
    end

    def create
      message = current_user.sent_messages.build(message_params)
      if message.save
        render json: format_message(message), status: :created
      else
        render json: { errors: message.errors.full_messages }, status: :unprocessable_entity
      end
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
      case current_user.role
      when 'intern'
        {
          id: message.id,
          content: message.content,
          company: {
            id: message.sender.id,
            name: message.sender.name
          },
          created_at: message.created_at
        }
      when 'company'
        {
          id: message.id,
          content: message.content,
          intern: {
            id: message.receiver.id,
            name: message.receiver.name
          },
          created_at: message.created_at
        }
      else
        {
          id: message.id,
          content: message.content,
          sender: {
            id: message.sender.id,
            name: message.sender.name
          },
          receiver: {
            id: message.receiver.id,
            name: message.receiver.name
          },
          created_at: message.created_at
        }
      end
    end
  end
end
