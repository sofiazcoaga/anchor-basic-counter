use anchor_lang::prelude::*; 

use crate::{
    state::*,
}; 

#[derive(Accounts)]
pub struct Count<'info> {

    #[account(mut)]
    pub signer: Signer<'info>, 

    #[account(
        init_if_needed, 
        seeds = ["COUNTER_NAMESPACE".as_bytes()],
        bump,
        space = Counter::LEN,
        payer = signer
    )]
    pub counter: Account<'info, Counter>, 

    pub system_program: Program<'info, System>,
}

impl<'info> Count<'info> {

    pub fn increase_count(&mut self) -> Result<()> {

        self.counter.total_calls += 1; 
        let timestamp_now: u64 = Clock::get().unwrap().unix_timestamp.try_into().unwrap(); 
        self.counter.timestamp = timestamp_now; 

        Ok(())
    }
}