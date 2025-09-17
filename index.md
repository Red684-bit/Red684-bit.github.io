<ol class="breadcrumb">
  <li class="breadcrumb-item active">Главная</li>
</ol>

<div class="progress">
  <div class="progress-bar progress-bar-striped progress-bar-animated"  id="progressbar" role="progressbar" style="width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div>

<p class="text-primary" align="right">↑ семестр</p>

<br>

<div class="row justify-content-center">
<div class="col-auto">
<div class="card border-primary mb-2" style="max-width: 20rem;">
  <div class="card-body">
  <img src="https://upload.wikimedia.org/wikipedia/commons/8/8a/Kramskoi_Christ_dans_le_d%C3%A9sert.jpg"
        alt="Христос_в_пустыне_(картина_Крамского)"  focusable="false" width="100%"
        class="d-block user-select-none" />
  </div>
</div>
</div>
</div>


 <script>
   $(() => {
       var d = new Date();
       var com = d.getMonth()+1;
       var m = (d.getMonth()+11)%12;
       var ran = com==2 ? (d.getFullYear() % 4 == 0 ? 29 : 28) : ((com%2==0 && com>=8)||(com%2==1 && com<8) ? 31 : 30);
       var bar = (m%7 + (d.getDate()/ran))*25;
       $('#progressbar').attr('aria-valuenow', bar).css('width', bar + "%");
 });  
 </script>

<br>

<div class="row justify-content-center">
<div class="col-auto">
<button type="button" class="btn btn-primary btn-lg" onclick="window.location.href='{{ site.baseurl }}/design-systems/';">Проектирование и дизайн информационных систем</button>
</div>
</div>

<div class="row justify-content-center">
<div class="col-auto">
<button type="button" class="btn btn-primary btn-lg" onclick="window.location.href='{{ site.baseurl }}/development-systems/';">Разработка кода информационных систем</button>
</div>
</div>

