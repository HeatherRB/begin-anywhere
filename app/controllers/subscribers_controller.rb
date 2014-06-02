class SubscribersController < ApplicationController

def index
  @subscribers = Subscriber.all
end

def create
  @subscriber = Subscriber.new(subscriber_params)
  @subscriber.save
end

private
  def subscriber_params
    params.require(:subscriber).permit(:name, :email)
  end

end
