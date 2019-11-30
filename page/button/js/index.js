[].slice.call( document.querySelectorAll( '.progress-button' ) ).forEach( function( bttn, pos ) {
    new UIProgressButton( bttn, {
        callback : function( instance ) {
            parent.vueApp.clearDefault()
            var progress = 0,
                interval = setInterval( function() {
                    progress = Math.min( progress + Math.random() * 0.1, 1 );
                    instance.setProgress( progress );

                    if( progress === 1 ) {
                        instance.stop( pos === 1 || pos === 3 ? -1 : 1 );
                        clearInterval( interval );
                    }
                }, 150 );
        }
    } );
} );