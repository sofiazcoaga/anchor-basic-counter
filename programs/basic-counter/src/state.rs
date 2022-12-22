use anchor_lang::prelude::*;


#[account]
pub struct Counter {
    pub total_calls: u64, 
    pub timestamp: u64,
}
impl Counter {
    pub const LEN: usize = 
        8   + // discriminator
        8*2   // 2 u64
    ; 
}