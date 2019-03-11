# Vue.js Project Timeline

![](/docs/screenshot.png?raw=true)

1. [Installation](#installation)
2. [Basic usage](#basic-usage)
3. [API](#api)
   1. [Props](#props)
   2. [Projects Array](#projects-array)
      1. [Available fields](#available-fields)
      2. [Team members](#team-members)
      3. [Example](#example)
4. [Contributing](#contributing)


## Installation

```bash
npm install @mvsde/vue-project-timeline
```

## Basic usage

```vue
<template>
  <project-timeline
    :start-month="startMonth"
    :end-month="endMonth"
    :projects="projects"
  />
</template>

<script>
import ProjectTimeline from '@mvsde/vue-project-timeline'

export default {
  components: {
    ProjectTimeline
  },

  data () {
    return {
      startMonth: new Date('2018-11'),
      endMonth: new Date('2019-02'),
      projects: [
        {
          name: 'Visualize vertical interfaces',
          start: new Date('2018-11-20'),
          end: new Date('2019-01-28')
        }
      ]
    }
  }
}
</script>

<style src="@mvsde/vue-project-timeline"></style>
```

More advanced demo code can be found within the [demo project](/demo).


## API

### Props

| Name            | Type    | Required | Default | Description |
| --------------- | ------- |:--------:|-------- | ----------- |
| `startMonth`    | Date    | ☑        |         | First month displayed in the timeline. The first day of the month for the given date will be automatically calculated. |
| `endMonth`      | Date    | ☑        |         | Last month displayed in the timeline. The last day of the month for the given date will be calculated. |
| `projects`      | Array   | ☑        |         | List of projects. See [Projects array](#projects-array) for a detailed format description. |
| `visibleMonths` | Integer |          | `12`    | Number of visible months. A scrollbar will be displayed if the timeline has more months than this value. |

### Projects array

#### Available fields

| Name           | Type     | Required | Description |
| -------------- | -------- |:--------:| ----------- |
| `name`         | String   | ☑        | Name of the project. |
| `start`        | Date     | ☑        | Start date of the project. |
| `end`          | Date     | ☑        | End date of the project. |
| `plannedStart` | Date     |          | Planned start date of the project. Displayed as a thin line below the project. |
| `plannedEnd`   | Date     |          | Planned end date of the project. Displayed as a thin line below the project. |
| `team`         | Array    |          | Team members of the project. See [Team members](#team-members) for a detailed format description. |
| `onClick`      | Function |          | Click handler for the project name. The project name will be a button if a function is provided. |

#### Team members

| Name           | Type     | Required | Description                |
| -------------- | -------- |:--------:| -------------------------- |
| `name`         | String   | ☑        | Name of the team member.   |
| `avatar`       | String   | ☑        | Avatar of the team member. |

#### Example

The following is an example with all fields populated:

```js
[
  {
    name: 'Visualize vertical interfaces',
    start: new Date('2018-11-20'),
    end: new Date('2019-01-28'),
    plannedStart: new Date('2018-11-10'),
    plannedEnd: new Date('2019-01-13'),
    team: [
      {
        name: 'Nellie Bender',
        avatar: 'https://source.unsplash.com/3402kvtHhOo/32x32'
      },
      {
        name: 'Alex Wilkerson',
        avatar: 'https://source.unsplash.com/das6NrjLoM0/32x32'
      }
    ],
    onClick () {
      console.log('Hello World!')
    }
  }
]
```


## Contributing

```bash
# Start development server
npm run serve

# Run JavaScript linter
npm run lint:js

# Run unit tests
npm run test:unit
```
