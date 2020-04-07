require 'test_helper'

class RetailerControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get retailer_index_url
    assert_response :success
  end

  test "should get show" do
    get retailer_show_url
    assert_response :success
  end

end
