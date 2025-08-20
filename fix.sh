#!/bin/bash

# ============================================================================
# SebyNela Dependency Fix Script
# Fixes the Zod version conflict issue
# ============================================================================

set -e

# Colors
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
RED='\033[0;31m'
NC='\033[0m'

echo -e "${BLUE}🔧 Fixing dependency conflicts...${NC}"

# Remove node_modules and package-lock if they exist
echo -e "${YELLOW}Cleaning up previous installation...${NC}"
rm -rf node_modules package-lock.json

# Install dependencies with compatible versions
echo -e "${BLUE}Installing compatible dependencies...${NC}"

# Core dependencies with specific versions to avoid conflicts
npm install \
  @supabase/supabase-js@2.39.0 \
  openai@4.20.0 \
  react-hook-form@7.48.0 \
  zod@3.22.4 \
  sonner@1.3.0 \
  lucide-react@0.309.0 \
  date-fns@3.0.0 \
  clsx@2.0.0 \
  tailwind-merge@2.2.0

# Dev dependencies
npm install -D \
  @types/node@20.10.0 \
  prettier@3.1.0 \
  prettier-plugin-tailwindcss@0.5.9

echo -e "${GREEN}✅ Dependencies fixed and installed successfully!${NC}"
echo ""
echo -e "${BLUE}Next steps:${NC}"
echo "1. Add your API keys to .env.local"
echo "2. Run: npm run dev"
echo "3. Open: http://localhost:3000"
echo ""
echo -e "${GREEN}🚀 You're ready to go!${NC}"