require 'sinatra/base'

class Thermostat < Sinatra::Base
  enable :sessions

  get '/' do
    erb :index
  end
end
  