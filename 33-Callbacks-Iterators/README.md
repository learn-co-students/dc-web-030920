# Functions as First Class Citizens
- anything you can do to an object, you to do to a function

## Building our own map



# Functions
- And the many ways to write them

# Callbacks
- passing functions as variables into other functions


### Bonus:
1. Just the name of all the cereals?
cerealData.map( cerealObj => cerealObj.name )
2. All cereals manufactured by General Mills?
cerealData.filter( cereal => cereal.mfr === "G")

3. The NAMES of all cereals manufactured by General Mills?
4. Any one cereal with calories between 80 and 100?
cerealData.find(cereal => cereal.calories > 80 && cereal.calories <= 100)

5. All cereals with calories between 80 and 100?
6. For each cereal, render it's name on the DOM
