<script lang="ts">
  let todoItems = [];
  let newTodoText = '';


  const saveNewTodo = () => {
    newTodoText = newTodoText.trim();
    if (!newTodoText) return;

    const newTodo = { text: newTodoText, checked: false, id: Date.now() };
    todoItems = [...todoItems, newTodo];
    newTodoText = '';
  }

  let count: number = 0
  const increment = () => {
    count += 1
  }
</script>

<ul class="list-group">
    {#each todoItems as todo (todo.id)}
    <li class="list-group-item">{todo.text}</li>
    {/each}
</ul>

<form on:submit|preventDefault={saveNewTodo}>
    <input class="todo-input" type="text" placeholder="New awesome task..." bind:value={newTodoText}>
</form>