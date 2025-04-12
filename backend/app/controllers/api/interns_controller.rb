module Api
  class InternsController < ApplicationController
    def index
      interns = User.where(role: 'intern')
      render json: { interns: interns.map { |intern| format_intern(intern) } }
    end

    private

    def format_intern(intern)
      {
        id: intern.id,
        name: intern.name
      }
    end
  end
end 