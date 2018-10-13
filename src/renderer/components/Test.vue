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
          <label for="text1" class="col-4 col-form-label">Text Field</label> 
          <div class="col-8">
          <input id="text1" name="text1" type="text" class="form-control here">
          </div>
      </div> 
      <div class="form-group row">
          <div class="offset-4 col-8">
          <button name="submit" type="submit" class="btn btn-primary">Submit</button>
          </div>
      </div>
    </form>
</template>

<script>
  export default {
    name: 'test'
  }
</script>

<style>
  /* CSS */
</style>
