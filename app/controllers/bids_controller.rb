class BidsController < ApplicationController
  before_action :set_bid, only: [:show, :edit, :update, :destroy]
  before_action :authenticate_user!

  # GET /bids
  # GET /bids.json
  def index
    response = RestClient.get 'http://api.bitvalor.com/v1/order_book.json'
    data = JSON.parse(response.body)["bids"]
    @fox = data.select {|element| element[0] == "FOX"}
    @b2u = data.select {|element| element[0] == "B2U"}
    @mbt = data.select {|element| element[0] == "MBT"}
  end

  def fox_volume_check
    response = RestClient.get 'http://api.bitvalor.com/v1/order_book.json'
    data = JSON.parse(response.body)["bids"]
    fox = data.select {|element| element[0] == "FOX"}

    greater = fox.select{|array| array[1] > params[:data].to_i }
    @result = greater.sum{|array| array[2]}
    respond_to do |format|
      format.json { render json: @result }
    end

  end
end
