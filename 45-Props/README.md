# React Props

## Thinking in React
- Planning and drawing boxes around everything

- Component Hierarchy

App
 |- Header
 |- CardContainer
      |- Card
      |- Card
      |- Card


- Build Static Components

## Props
- Props are passed to other components and can only flow down (passed from parent)
- What does the props object look like?
- Like parameters to the function
- Props are read only

## Object Destructuring

## React Docs
- https://reactjs.org/docs/getting-started.html




#### Semantic UI External Stylesheet

`<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/1.11.8/semantic.min.css">`






`<div className="ui inverted blue menu navbar">
    <h2 className="ui header">
      <i className="paint brush icon"></i>
      <div className="content">Painter</div>
      <div className="sub header">List of Paintings</div>
    </h2>
</div>`


`<div class="ui card">
	<div>
		<img src="https://d32dm0rphc51dk.cloudfront.net/pVc7CubFzVlPhbErTAqyYg/medium.jpg">
	</div>
	<p>Portrait of a Carthusian by Petrus Christus</p>
	<p>Height: 11.5 x Width: 8.5</p>
</div>`

`let {paintingObj: {artist: {name}, title, image, dimensions: {width, height}}} = props`
