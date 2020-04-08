Nested Forms:

- in Retailer model, include `accepts_nested_attributes_for :snacks`
- include nested form
- when creating empty retailer (new controller action), `@retailer.snacks.build`
- fix strong params:  
```rb
      def retailer_params
        params.require(:retailer).permit(:name, :year_established,
            snacks_attributes: [:name, :calories, :deliciousness])
      end
```