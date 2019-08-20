# Notes for database design

## Relationships

- `projects` can have multiple `tasks`
- `tasks` belong to only one `project`
- `projects` can use multiple `resources`
- `resources` can be used in multiple `projects`

---

## Requirements

- When adding `projects` the client must provide a name, description is optional
- When adding `resources` the client must provide a name, the description is optional
- When adding a `task` the client must provide a description, notes are optional
- When adding a `task` the client must provide the id of an existing project
- For `projects` and `tasks` if no value is provided for the `completed` property, the API should provide a default value of `false`.

---

## Entities

### Projects

```javascript
{
  id: INT,                // Unique ID
  name: STRING,           // Required
  description: STRING,    // Optional
  completed: BOOLEAN,     // NotNullable, Default value *false*
}
```

### Resources

```javascript
{
  id: INT,                // Unique ID
  name: STRING,           // Required
  description: STRING,    // Optional
}
```

### Tasks

```javascript
{
  id: INT,                // Unique ID
  description: STRING,    // Required
  notes: STRING,          // Optional
  completed: BOOLEAN,     // NotNullable, Default value *false*
}
```
