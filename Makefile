COMPOSE=docker compose -f infrastructure/compose.yaml -p kinglith

up:
	$(COMPOSE) up -d

down:
	$(COMPOSE) down

logs:
	$(COMPOSE) logs -f

logs-%:
	$(COMPOSE) logs -f $*

restart:
	$(COMPOSE) down && $(COMPOSE) up -d

ps:
	$(COMPOSE) ps

auth-%:
	$(COMPOSE) exec auth make -f apps/auth/Makefile $* name=$(name)

.PHONY: up down logs restart ps
