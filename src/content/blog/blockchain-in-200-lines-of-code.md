---
title: "A BLOCKCHAIN IN 200 LINES of CODE"
date: "2018-06-29"
slug: "blockchain-in-200-lines-of-code"
excerpt: "This article demonstrates how to build a basic in-memory blockchain called NaiveChain using Javascript in under 200 lines of code."
thumbnail: "blog-blockchain.webp"
category: "Blockchain"
---
This article demonstrates how to build a basic in-memory blockchain called `NaiveChain` using Javascript in under 200 lines of code.

**1. Block Structure:**
Each block contains:
- `index`: position of block in the chain.
- `previousHash`: hash of the previous block.
- `timestamp`: time when block was created.
- `data`: any payload (transactions, text).
- `hash`: SHA-256 hash calculated from all block fields.

**2. Block Hashing:**
We calculate SHA-256 hashes using Node's crypto library. There is no Proof of Work in this basic model; block generation is instant.

**3. Array Storage:**
Blocks are kept in a simple in-memory Javascript array. The first block is the hardcoded "Genesis Block".

**4. Validation:**
Every time a block is appended:
- We check if the block index is exactly `previousBlock.index + 1`.
- We verify `block.previousHash` matches `previousBlock.hash`.
- We recalculate the hash of the new block and verify it matches `block.hash`.

**5. Choosing Longest Chain:**
In a network conflict, the node accepts the longest chain as the source of truth, replacing its local chain if the new chain is valid.

**6. Peer Synchronization:**
Nodes connect via WebSockets. Whenever a new block is generated, it is broadcasted to all peers. When peers receive it, they validate and sync.

**7. Control API:**
An Express HTTP server allows querying the blocks list and mining new blocks with simple HTTP requests.
