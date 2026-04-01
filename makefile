create-bucket:
	aws s3api head-bucket --bucket website-shopgrid --region eu-central-1 2>/dev/null || \
		aws s3api create-bucket --bucket website-shopgrid --region eu-central-1 \
			--create-bucket-configuration LocationConstraint=eu-central-1

deploy-prod:
	yarn po
	yarn build
	aws s3 sync ./out s3://website-shopgrid --delete --region eu-central-1
# 	aws cloudfront create-invalidation \
# 		--distribution-id E2JGK7ZBYY03HR \
# 		--paths "/*" \
# 		--region eu-central-1