# Example: Analogy Done Well

Topic: caching in computing

### Cache

A cache keeps a nearby copy of information that is likely to be needed again, so the system can avoid repeatedly fetching it from a slower source.

**Analogy:** keeping frequently used ingredients on the kitchen counter instead of walking to the pantry every time.

```text
counter            -> cache
pantry              -> slower backing store
frequently reused   -> likely to be requested again
shorter trip        -> lower access latency
```

**Where it breaks:** digital caches have precise capacity, eviction, consistency, and invalidation rules. A kitchen counter does not capture those behaviors well.

**In the real system:** a cache trades extra storage and management complexity for faster access to data that can be served from a closer or faster location.

**Check:** Why can a cache become less useful when requests rarely repeat?

## Why this analogy works

The familiar system preserves the important relationship: **placing reusable material closer reduces repeated retrieval cost**. It also explicitly prevents the learner from assuming the analogy explains every caching problem.
