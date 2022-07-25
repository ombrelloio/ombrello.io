# Build icons

Place the svgs in the folder: "src/assets/SVG", and run the scripts:

```bash
yarn build:icons
```

This will convert all the svgs to React components and place them in the "src/components/atoms/Icon/icons" folder.

# Usage in components

```
import {Icon} from "@app/components/atoms"

<Icon name="menu"/>
```

## Options

- **clean?: boolean (false)**
  when false a size of 24px is used, when true it has no size definitions.
