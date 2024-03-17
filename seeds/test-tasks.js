/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('todos').del()
  await knex('todos').insert([
    { task: 'Greet poeple' },
    { task: 'Smile' },
    { task: 'Breathe (it is very important)' },
  ])
}
