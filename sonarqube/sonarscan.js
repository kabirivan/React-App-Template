const scanner = require('sonarqube-scanner');

scanner(
    {
        serverUrl: 'http://localhost:9000',
        token: "",
        options: {
            'sonar.projectName': 'React-App-Template',
            'sonar.projectDescription': 'Description for "React-App-Template" project...',
            'sonar.projectKey': 'React-App-Template',
            'sonar.projectVersion': '1.0.0',
            'sonar.exclusions': 'reports/dependency-check/**.*, src/assets/**.*, src/assets/css/**.*, src/assets/styles**.*, src/serviceWorker.js',
            'sonar.sourceEncoding': 'UTF-8',
        }
    },
    () => process.exit()
)