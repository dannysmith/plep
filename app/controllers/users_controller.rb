class UsersController < ApplicationController
  def new
    @user = User.new
  end
  
  def create
    @user = User.new(params[:user])
    if @user.save
      flash[:notice] = "Thanks for signing up! You are now logged in."
      redirect_to profile_url
    else
      render :action => 'new'
    end
  end
  
  def show
    if params[:id] then
      @user = User.find(params[:id])
      flash[:notice] = "Debug: User found from user_id"
    else
      @user = current_user
      flash[:notice] = "Debug: User found thru current user"
    end
  end
  
  def edit
    @user = current_user
  end
end
