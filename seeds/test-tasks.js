/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('todos').del()
  await knex('todos').insert([
    { id: 1, task: 'Greet poeple' },
    { id: 2, task: 'Smile' },
    { id: 3, task: 'Breathe (it is very important)' },
  ])
}
