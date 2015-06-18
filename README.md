# loopback-connector-memory-idstr

the same as loopback default connector memory, except that this connector can handle stringified id.

# installation

```bash
npm install loopback-connector-memory-idstr
```

# usage

server/datasources.json in loopback
```json
{
    "db": {
        "name"     : "db",
        "connector": "memory-idstr"
    }
}
```

