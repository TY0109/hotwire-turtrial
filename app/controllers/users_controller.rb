class UsersController < ApplicationController
  def index
    @users = User.first(3)
  end

  def append
    @users = User.last(3)
    render layout: false, content_type: 'text/vnd.turbo-stream.html'
  end

  def prepend
    @users = User.last(3)
    render layout: false, content_type: 'text/vnd.turbo-stream.html'
  end

  def before
    @items = Item.last(3)
    render layout: false, content_type: 'text/vnd.turbo-stream.html'
  end

  def after
    @items = Item.last(3)
    render layout: false, content_type: 'text/vnd.turbo-stream.html'
  end

  def update
    @users = User.last(3)
    render layout: false, content_type: 'text/vnd.turbo-stream.html'
  end

  def replace
    @items = Item.last(3)
    render layout: false, content_type: 'text/vnd.turbo-stream.html'
  end

  def remove
    render layout: false, content_type: 'text/vnd.turbo-stream.html'
  end
end
