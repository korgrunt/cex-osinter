# cex-osinter

**cex-osinter** is a tool for searching existing accounts on a platform from a given email address.

### Requirements

Docker

### Disclaimer

Do not use this tool on emails that you do not own. Respect the privacy of other people.

### Before all

Before running the tool, make sure to give execute permissions by running:
```
chmod +x ./cex-osinter.sh
```

## Usage

To use this tool, you can execute the script `./cex-osinter.sh` with different options.

### Available Options

- `-help`: Display the documentation.
- `-build`: Build the Docker image for easy portability.
- `-run`: Run the tool, you just need to follow the steps.
- `-version`: Output version information and exit.

### Examples

- To display the documentation:
  ```
  ./cex-osinter.sh -help
  ```

- To build the Docker image:
  ```
  ./cex-osinter.sh -build
  ```

- To run the tool to discover accounts from an email address:
  ```
  ./cex-osinter.sh -run
  ```

- To display the version of the tool:
  ```
  ./cex-osinter.sh -version
  ```

### Contribute

- Enhanced speed or browser discrretion:
  
  Feel free to push a merge request, post an issue, otr other contribution on this repository

- Add target
  
    Check the targets.js file to add some targets. You just need to understand the mechanics and add the steps in JSON format. There's no need to encode, just go and extract the XPath of the HTML element on the target page to simulate the behavior you want to automate.

### Maintain

    With CI/CD and all Agile Scrum methodologies, the entire ecosystem evolves rapidly. Therefore, this project needs to be maintained regularly to ensure that the targets remain reachable. At the very least, update the XPath if the DOM has been modified by the target developer.

## Author

Written by Naim Aouaichia.