const sections = document.querySelectorAll( '.section' );
const secBtns = document.querySelector( '.controls-btn' );
const btns = document.querySelectorAll( '.ctrl' );
const bodyCon = document.querySelector( '.main-content' );



//page transition fuxntion
const pageTransition = () => {

    //button click active class

    for ( let i = 0; i < btns.length; i++ ) {
        btns[i].addEventListener( 'click', function() {
            let currentBtn = document.querySelectorAll( '.active-btn' )
            currentBtn[ 0 ].className = currentBtn[ 0 ].className.replace( 'active-btn', '' )
            this.className += ' active-btn'
        } )
    }

    //sections active

    bodyCon.addEventListener( 'click', function (e) {
        const id = e.target.dataset.id;
       
        if ( id ) {
            // remove selected from other btns
            btns.forEach( ( btn ) => {
                btn.classList.remove( 'active' )
            } )
            e.target.classList.add( 'active' )
            
            //hide other sections
            sections.forEach( ( section ) => {
                section.classList.remove( 'active' )
            } )
            
            const element = document.getElementById( id );
            element.classList.add( 'active' )

        }
    });



    //toggle
    const themebtn = document.querySelector( '.theme-btn' );
    themebtn.addEventListener( 'click', function () {
        let ele = document.body;
        ele.classList.toggle( 'light-mode' );
    });
};
pageTransition();