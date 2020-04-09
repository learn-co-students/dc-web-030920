require 'test_helper'

class ScientistsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get scientists_index_url
    assert_response :success
  end

  test "should get show" do
    get scientists_show_url
    assert_response :success
  end

end
