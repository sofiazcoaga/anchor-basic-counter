import * as anchor from "@project-serum/anchor";
import { Program } from "@project-serum/anchor";
import { BasicCounter } from "../target/types/basic_counter";

describe("basic-counter", () => {
  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.AnchorProvider.env());

  const program = anchor.workspace.BasicCounter as Program<BasicCounter>;

  it("It increments the counter every time it gets called", async () => {
    // Add your test here.
    

    let [counter_address, _] = await anchor.web3.PublicKey.findProgramAddressSync([
      Buffer.from('COUNTER_NAMESPACE')
    ],
    program.programId); 

    let tx = await program.methods.count().accounts({counter: counter_address}).rpc();

    let counter = await program.account.counter.fetch(counter_address); 


    console.log(`Veces que se llamo al programa: ${counter.totalCalls}. Timestamp: ${counter.timestamp}`);

    tx = await program.methods.count().accounts({counter: counter_address}).rpc();
    counter = await program.account.counter.fetch(counter_address); 

    console.log(`Veces que se llamo al programa: ${counter.totalCalls}. Timestamp: ${counter.timestamp}`);

    tx = await program.methods.count().accounts({counter: counter_address}).rpc();
    counter = await program.account.counter.fetch(counter_address); 

    console.log(`Veces que se llamo al programa: ${counter.totalCalls}. Timestamp: ${counter.timestamp}`);

    tx = await program.methods.count().accounts({counter: counter_address}).rpc();
    counter = await program.account.counter.fetch(counter_address); 

    console.log(`Veces que se llamo al programa: ${counter.totalCalls}. Timestamp: ${counter.timestamp}`);

    tx = await program.methods.count().accounts({counter: counter_address}).rpc();
    counter = await program.account.counter.fetch(counter_address); 

    console.log(`Veces que se llamo al programa: ${counter.totalCalls}. Timestamp: ${counter.timestamp}`);

  });
});
