<h1 align="center">
  <b>Issue Visualizer</b>
</h1>

The Issue Visualizer app is a platform to search issues from any publicly accessible github repo. Just type a repo name, and you'll get all available issues in a material-styled, paginated table.

#### User interaction:

- Type the full github repo name in the search input (ex. mojombo/bert), and click the "search" button for displaying the available issues
- If the selected repo does not exist, or requires authentication (private repos), a snackbar alert will be displayed
- The search input has a required validation control. If left in blank, a validation error will be displayed below the input
- Once the repo issues have been searched, it is possible to navigate the results through the pagination at the bottom-right of the table

## Getting started 🚀

Clone this repository in your local. You will need to have both `NodeJs` and `Angular CLI` installed globally on your computer.

`git clone https://github.com/iarrieta90/task-visualizer.git`

Then run `npm` to install all project dependencies:

`npm install`

Finally, run `npm start` for initalizing the app. It will open on `localhost:4200` by default

## Built with 🛠️
* `Angular`
* `Angular-material`
* `TypeScript`
* `Scss`
* `Jest`

## Running tests 
This project is partially covered with unit tests. Run `npm test` to execute the tests via jest.
