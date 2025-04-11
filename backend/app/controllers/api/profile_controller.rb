module Api
  class ProfileController < ApplicationController
    before_action :authenticate_user!

    def show
      render json: {
        id: current_user.id,
        email: current_user.email,
        name: current_user.name,
        role: current_user.role,
        profile: profile_data
      }
    end

    private

    def current_user
      @current_user ||= User.find_by(id: session[:user_id])
    end

    def authenticate_user!
      render json: { error: 'Unauthorized' }, status: :unauthorized unless current_user
    end

    def profile_data
      case current_user.role
      when 'intern'
        current_user.intern_profile&.as_json(only: [:university, :introduction])
      when 'company'
        current_user.company_profile&.as_json(only: [:industry, :description])
      end
    end
  end
end
