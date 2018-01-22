class AboutPagesController < ApplicationController
  skip_before_action :verify_authenticity_token

  def new
    @about = AboutPage.create(about_1: "Here at Cap’s Clear Pools we are dedicated to giving you the most enjoyable time possible owning a pool.",
    about_2: "My name is Collin, I am the owner of Cap’s Clear pool, at 22 years old I maybe young but I do know my stuff. With almost 5 years of hands on pool experience I am well educated in everything I need to know to keep your pool crystal clear and running properly all year long.",
    about_3: "I was born and raised here in San Antonio, graduated from Samuel Clemens in 2014. Most of my high school career I worked at leslies pool supply testing and helping customers get their pools on track them-selves, this is where I found my love for pools and helping people. Once I left there I started college and cleaning pools on the side to make some extra money, then last year I started this business after I decided school wasn’t the right choice for me.",
    about_4: "")
    redirect_to about_page_url(@about)
  end

  def update
    @about = AboutPage.find(1)
    @about.update(about_1: params["about_1"], about_2: params["about_2"], about_3: params["about_3"], about_4: params["about_4"])
    @about.save
  end

  def show
    @about = AboutPage.find(1)
    render json: @about
  end

end
