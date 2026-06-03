DS=/app/apps/auth/src/logic/infrastructure/persistence/datasource/datasource.ts
MIGRATIONS=/app/apps/auth/src/migrations
TYPEORM=bunx typeorm-ts-node-commonjs

migrate-generate:
	$(TYPEORM) migration:generate $(MIGRATIONS)/$(name) -d $(DS)

migrate-run:
	$(TYPEORM) migration:run -d $(DS)

migrate-revert:
	$(TYPEORM) migration:revert -d $(DS)

.PHONY: migrate-generate migrate-run migrate-revert
