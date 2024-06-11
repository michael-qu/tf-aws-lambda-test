# How to use this repo to deploy AWS Lambda Function
After you pull this repo, you will see example source code in Python, JavaScript and TypeScript provided in src folder.
Please run the following command to install the dependencies:
npm i
You need to specify which source code you want to deploy to AWS. Feel free to uncomment the corresponding blocks in main.tf.

# Build
For Python and JavaScript code, you do not need to build it. You can just skip this chapter.
For TypeScript code, you need to first install TypeScript by running:
npm i -g typescript
If you have installed TypeScript correctly, you can run the below command to check its version:
tsc -v
To build the TypeScript code, you need to run the following command:
npm run build
After building the TS code, you'll see the transpiled JS code in the "build" folder.

# Deployment Tools
Make sure you have set up your AWS account and installed AWS CLI Version 2.
https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html
You also need to download Terraform:
https://developer.hashicorp.com/terraform/tutorials/aws-get-started/install-cli

After building the source code, run the following commands:
terraform init
terraform plan
terraform apply

The first time to run "terraform init" will take a long time since it needs to download the required provider files.
In "terraform plan", you'll see which source code you will deploy to AWS.
In "terraform apply", you'll see the corresponding source code to be zipped and deployed to your AWS account. The terraform state file will also be generated automatically.

You can run the following command to destroy the Lambda function you created (don't delete it manually otherwise your state file will be out of sync):
terraform destroy

Happy coding!
Michael Qu
