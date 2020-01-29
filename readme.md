
React native components
====

We create modern responsive react native components.

Try our belove sample components.

```
yarn add pipe-react-native-component

(or)

npm install pipe-react-native-component
```

you can import them like this and use it.

```
import { PinterestCard, PinterestCards, CardSlider } from "pipe-react-native-component" 
```

```
			<PinterestCard data={cardItem}/>
			<PinterestCards data={cardItems}/>
			<CardSlider data={sliderItems = {

				}}/>
```

```
	const cardItem = {
	    title: 'Beautiful and dramatic Antelope',
	    description: 'Lorem ipsum dolor sit amet et nuncat mergitur',
	    image: 'https://i.imgur.com/UYiroysl.jpg',
	  };

	 const cardItems = [
		 {
	      title: 'Beautiful and dramatic Antelope',
	      description: 'Lorem ipsum dolor sit amet et nuncat mergitur',
	      image: 'https://i.imgur.com/UYiroysl.jpg',
	    },
	    {
	      title: 'Earlier this morning, NYC',
	      description: 'Lorem ipsum dolor sit amet',
	      image: 'https://i.imgur.com/UPrs1EWl.jpg',
	    },
	    {
	      title: 'White Pocket Sunset',
	      description: 'Lorem ipsum dolor sit amet et nuncat ',
	      image: 'https://i.imgur.com/MABUbpDl.jpg',
	    },....
	 ];

	 const sliderItems = [
	 {
	    title: 'card1',
	    description: 'Lorem ipsum dolor sit amet et nuncat mergitur',
	    image: 'https://i.imgur.com/UYiroysl.jpg',
	    buttonTitle: 'Get Started',
	  },
	  {
	    title: 'card2',
	    description: 'Lorem ipsum dolor sit amet et nuncat mergitur',
	    image: 'https://i.imgur.com/UPrs1EWl.jpg',
	    buttonTitle: 'Get Started',
	  }
  	];
```
etc
===

Thanks