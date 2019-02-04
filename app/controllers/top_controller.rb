class TopController < ApplicationController
  def index
  end

  def new
  end

  def create
  end
  private
    def slack_params
      params.permit(:name, :message, :mail)
      # requireは今回必要ない、keyがないから,form側でなんらかのテーブルに基づいてformを作成するとkeyが作られる
    end
end
