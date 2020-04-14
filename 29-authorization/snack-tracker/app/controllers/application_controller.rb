class ApplicationController < ActionController::Base

    # whenever you want your view to call a controller method
    helper_method :current_user

    def current_user
        User.find(session[:user_id])
    end
end
