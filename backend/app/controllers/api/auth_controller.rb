module Api
  class AuthController < ApplicationController
    def register
      user = User.new(user_params)
      if user.save
        session[:user_id] = user.id
        render json: user.as_json(only: [:id, :email, :name, :role]), status: :created
      else
        render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
      end
    end

    def login
      user = User.find_by(email: params[:email])
      if user&.authenticate(params[:password])
        session[:user_id] = user.id
        render json: { user: user.as_json(only: [:id, :email, :name, :role]) }
      else
        render json: { error: 'Invalid email or password' }, status: :unauthorized
      end
    end

    def logout
      session[:user_id] = nil
      render json: { message: 'Successfully logged out' }
    end

    private

    def user_params
      params.require(:user).permit(:email, :password, :password_confirmation, :name, :role)
    end
  end
end
