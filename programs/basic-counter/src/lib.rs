use anchor_lang::prelude::*;

pub mod state; 
pub mod instructions;

use crate::{
    instructions::*,
};

declare_id!("DZew3ZMhEBhv7G6WdywjqAZrs4ZfeAo65Vez38wBYic6");

#[program]
pub mod basic_counter {
    use super::*;

    pub fn count(ctx: Context<Count>) -> Result<()> {
        ctx.accounts.increase_count()
    }
}

