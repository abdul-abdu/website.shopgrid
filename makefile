deploy-prod:
	yarn build --mode production
	aws s3 sync ./dist s3://website-shopgrid --delete --region eu-central-1
# 	aws cloudfront create-invalidation \
# 		--distribution-id E2JGK7ZBYY03HR \
# 		--paths "/*" \
# 		--region eu-central-1