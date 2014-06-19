require 'spec_helper'

describe "homepage" do
    it "should have content 'home'" do
      visit '/welcome/index'
      expect(page).to have_content('home')
    end
end
