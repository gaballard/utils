# @geoffware/utils

A collection of simple utility functions.

## Functions

### `dotenv() -> void`

Populates environment variables from a `.env` file.

### `toJSON(input: string) -> string | undefined`

Converts a string to JSON, returning `undefined` instead of throwing an error if string is not valid JSON.

### `capitalize(input: string) -> string`

Capitalizes a string.

### `snakeToCamelCase(input: string) -> string`

Converts snake_case to camelCase.

### `toSnakeCase(input: string) -> string`

Converts a string to snake_case.

### `sanitizeString(input: string) -> string`

Strips special characters from a string.
