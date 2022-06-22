$( function() {
  const totalAcertos = 0;
  $( "#forma_01, #forma_02, #forma_03, #forma_04, #forma_05, #forma_06, #forma_07, #forma_08" ).draggable({
    revert: 'invalid'
  });
  $( "#objeto_01" ).droppable({
    accept: "#forma_01",
    classes: {
      "ui-droppable-active": "ui-state-active",
      "ui-droppable-hover": "ui-state-hover"
    },
    drop: function( event, ui ) {
      $( this )
        .addClass( "ui-state-highlight" )
        .find( "li" )
          .html( "Dropped!" );
          this.totalAcertos++;
          placar();
    }
  });
  $( "#objeto_02" ).droppable({
    accept: "#forma_02",
    classes: {
      "ui-droppable-active": "ui-state-active",
      "ui-droppable-hover": "ui-state-hover"
    },
    drop: function( event, ui ) {
      $( this )
        .addClass( "ui-state-highlight" )
        .find( "li" )
          .html( "Dropped!" );
          this.totalAcertos++;
          placar();
    }
  });
  $( "#objeto_03" ).droppable({
    accept: "#forma_03",
    classes: {
      "ui-droppable-active": "ui-state-active",
      "ui-droppable-hover": "ui-state-hover"
    },
    drop: function( event, ui ) {
      $( this )
        .addClass( "ui-state-highlight" )
        .find( "li" )
          .html( "Dropped!" );
          this.totalAcertos++;
          placar();
    }
  });
  $( "#objeto_04" ).droppable({
    accept: "#forma_04",
    classes: {
      "ui-droppable-active": "ui-state-active",
      "ui-droppable-hover": "ui-state-hover"
    },
    drop: function( event, ui ) {
      $( this )
        .addClass( "ui-state-highlight" )
        .find( "li" )
          .html( "Dropped!" );
          this.totalAcertos++;
          placar();
    }
  });
  $( "#objeto_05" ).droppable({
    accept: "#forma_05",
    classes: {
      "ui-droppable-active": "ui-state-active",
      "ui-droppable-hover": "ui-state-hover"
    },
    drop: function( event, ui ) {
      $( this )
        .addClass( "ui-state-highlight" )
        .find( "li" )
          .html( "Dropped!" );
          this.totalAcertos++;
          placar();
    }
  });
  $( "#objeto_06" ).droppable({
    accept: "#forma_06",
    classes: {
      "ui-droppable-active": "ui-state-active",
      "ui-droppable-hover": "ui-state-hover"
    },
    drop: function( event, ui ) {
      $( this )
        .addClass( "ui-state-highlight" )
        .find( "li" )
          .html( "Dropped!" );
          this.totalAcertos++;
          placar();
    }
  });
  $( "#objeto_07" ).droppable({
    accept: "#forma_07",
    classes: {
      "ui-droppable-active": "ui-state-active",
      "ui-droppable-hover": "ui-state-hover"
    },
    drop: function( event, ui ) {
      $( this )
        .addClass( "ui-state-highlight" )
        .find( "li" )
          .html( "Dropped!" );
          this.totalAcertos++;
          placar();
    }
  });
  $( "#objeto_08" ).droppable({
    accept: "#forma_08",
    classes: {
      "ui-droppable-active": "ui-state-active",
      "ui-droppable-hover": "ui-state-hover"
    },
    drop: function( event, ui ) {
      $( this )
        .addClass( "ui-state-highlight" )
        .find( "li" )
          .html( "Dropped!" );
          this.totalAcertos++;
          placar();
    }
  });
} );

function placar() {
  var totalGeral = 8;

  console.log(totalGeral);
  console.log(this.totalAcertos);

  if (totalGeral == this.totalAcertos) {
    setTimeout(function(){
      alert('Parabéns! Você venceu!');
      window.location.reload();
    }, 900);
  }
}