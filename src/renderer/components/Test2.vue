<template>
  <form>
    <div class="form-group row">
      <label for="text" class="col-4 col-form-label">Text Field</label> 
      <div class="col-8">
        <div class="input-group">
          <div class="input-group-addon">
            <i class="fa fa-address-card"></i>
          </div> 
          <input id="text" name="text" type="text" class="form-control here">
        </div>
      </div>
    </div>
    <div class="form-group row">
      <label for="select" class="col-4 col-form-label">Select</label> 
      <div class="col-8">
        <select id="select" name="select" class="custom-select">
          <option value="rabbit">Rabbit</option>
          <option value="duck">Duck</option>
          <option value="fish">Fish</option>
        </select>
      </div>
    </div> 
    <div class="form-group row">
      <div class="offset-4 col-8">
        <button name="submit" type="submit" class="btn btn-primary">Submit</button>
      </div>
    </div>
    <div class="input-group">
  <span class="input-group-addon" id="basic-addon1">@</span>
  <input type="text" class="form-control" placeholder="Username" aria-describedby="basic-addon1">
</div>
  </form>
</template>

<script>
  export default {
    name: 'test2'
  }
</script>

<style>
  /* CSS */
</style>
