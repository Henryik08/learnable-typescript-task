# Learnable TypeScript Task

A small TypeScript example demonstrating discriminated unions, function overloads, and type-safe filtering.

## Overview

This project defines two person types: `User` and `Admin`, combined into a `Person` union.
A filter function is implemented with overloads so TypeScript returns the correct result type when filtering by either `user` or `admin`.

## Structure

- `index.ts` - sample code with data, filtering logic, and console output
- `tsconfig.json` - TypeScript configuration for compiling the project

## Features

- `User` and `Admin` interfaces with shared and unique fields
- `Person` union type for working with both types together
- `filterPersons` function using overloads and runtime filtering
- safe filtering by `user` or `admin` with typed criteria

## How to run

1. Install TypeScript if needed:
   ```bash
   npm install -g typescript
   ```
2. Compile the project:
   ```bash
   tsc
   ```
3. Run the compiled output:
   ```bash
   node index.js
   ```