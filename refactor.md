# Still on fire? :steam_locomotive::steam_locomotive::steam_locomotive::steam_locomotive: :smiley:

### Checklist for steps that yet can be done for refactoring/developing this project later-on:

**General:**

- structure and namings

  - check namings of useStates (especially for lower case on inital States and readability)

- styling:

  - check/adjust for more responsiveness
  - adjust/add missing styling where needed
  - separate or group the styles
  - adjust namings for classes (regarding readability, meaningfull namings and using a consistent convention in general)

- components/views

  - move components and views (especially with own styles) in to separate folders
  - check namings for components and views
    adjust file namings (after moving to folders to have an index.js and styles.css)

- Use Context Api

- Add a topbar component in order to render the components Search and ButtonAllPoke

**View 'Fightview.js'**

- move JSX into 'Fight' component

- reduce code and improve functionality

  - remove the click buttons in order to get a new poke directly onChange of the input field
  - check useStates, useEffects, redundant requests --> combine and remove redundant requests

**Fight logic**

- Extend fight logic by adding more complexity

**MongoDB/Mongoose**

- store fights in a fights collection
  (fight should regroup pokemon ids and the winner)
