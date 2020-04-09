require 'test_helper'

class MissionsControllerTest < ActionDispatch::IntegrationTest
  test "should get new" do
    get missions_new_url
    assert_response :success
  end

end
