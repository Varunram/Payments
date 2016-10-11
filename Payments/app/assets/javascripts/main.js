/* ---------------------------------------------------------------------
Global Js
Target Browsers: All
------------------------------------------------------------------------ */

var FX = (function(FX, $) {

    /**
     * Page Preloader
     * @type {Object}
     */
    FX.Loader = {
        init: function() {
            $(window).on('load', this.loaded);
        },

        loaded: function() {
            $('html').removeClass('is-loading');

            setTimeout(function(){
                $('.loader').remove();
            }, 3000);
        }
    }


    FX.Header = {
        init: function() {
            $(window).on('scroll', this.onScroll);
            this.maybeAddMegaActiveState();
        },

        maybeAddMegaActiveState: function()
        {
            var hasActive = $('#menu-item-1505').children('.sub-menu')
                                                .children('li')
                                                .filter('.current-menu-item')
                                                .length;
            if( ! hasActive )
            {
                $('#menu-item-2987').addClass('current-menu-item');
            }
        },

        onScroll: function(event) {
            var scrolltop = $(this).scrollTop();

            if( scrolltop >= 150 ) {
                $('.home #page-header, .page-sidebar').addClass('sticky');
            }
            else if( scrolltop <= 150 ) {
                $('.home #page-header, .page-sidebar').removeClass('sticky');
            }
        }
    }




    FX.SiteSearch = {
        init: function()
        {
            this.bind();
        },

        bind: function()
        {
            $('.header--search').on('click', this.toggleVisibility);
            $('#search-close').on('click', this.close);

        },

        toggleVisibility: function(event) {
            event.preventDefault();
            $('.header--search, #search-popup').toggleClass('active');

            // css transition makes display slow
            // so we wait a 10th of a sec then set focus
            setTimeout(function(){
                $('#search').focus();
            }, 100);

        },

        close: function(event) {
            event.preventDefault();
            $('.header--search, #search-popup').removeClass('active');
        }
    }




    /**
     * Social Share icons
     * @type {Object}
     */
    FX.Social = {
        init: function() {
            $(".js-social-share").on("click", this.open);
        },

        open: function(event) {
          event.preventDefault();

          FX.Social.windowPopup($(this).attr("href"), 500, 300);
        },

        windowPopup: function (url, width, height) {
            // Calculate the position of the popup so
            // it’s centered on the screen.
            var left = (screen.width / 2) - (width / 2),
                top = (screen.height / 2) - (height / 2);

            window.open(
                url,
                "",
                "menubar=no,toolbar=no,resizable=yes,scrollbars=yes,width=" + width + ",height=" + height + ",top=" + top + ",left=" + left
            );
        }
    }



    FX.ToTop = {
        init: function() {
            if( ! $('.button--to-top').length )
                return;

            this.attr  = $('.button--to-top').attr('data-to');
            this.to    = ( typeof this.attr !== typeof undefined && this.attr !== false )
                          ? $(this.attr).offset().top - 150
                          : 100;

            $('.button--to-top').on('click', $.proxy(this.scrollToTop, this));
            $(window).on('scroll', $.proxy(this.toggleVisibility, this));
        },

        scrollToTop: function(event) {
            event.preventDefault();

            $('html,body').animate({
                scrollTop: this.to },
                1000
            );
        },

        toggleVisibility: function(event) {
            var scroll = $(window).scrollTop();

            if( scroll > this.to && ( $('.parts-search').height() > $(window).height() ) ) {
                $('.button--to-top').addClass('visible');
            } else {
                $('.button--to-top').removeClass('visible')
            }
        }
    }



    /* ---------------------------------------------------------------------
    Code Block
    Description
    ------------------------------------------------------------------------ */

    FX.AjaxPages = {
        state: {},

        init: function() {
            if( ! Modernizr.history )
                return;

            // Setup our inital state
            this.state.url = window.location.href;
            this.state.title = document.title;
            this.state.content = $('#page-body').html();

            // set the inital state for history
            window.history.replaceState(this.state, this.state.title, this.state.url);

            this.bind();
        },

        bind: function() {
            $('[href^="'+FX.siteurl+'"]').on('click', this.loadPage);
            $(window).on('popstate', this.popState);
        },

        loadPage: function(event) {
            event.preventDefault();
            $.get(event.target.href, FX.AjaxPages.createState);
        },

        createState: function(response, status, xhr) {
            var self = FX.AjaxPages;

            self.state.url = this.url
            self.state.content = response
            self.state.title = xhr.getResponseHeader('X-Page-Title');

            self.updateContent(self.state);
            window.history.pushState(self.state, self.state.title, self.state.url);
        },

        updateContent: function(state) {

            document.title = state.title;
            $('#page-body').html(state.content);

        },

        popState: function(event) {
            var self = FX.AjaxPages;

            if(event.state) {
                self.updateContent(event.state);
            }
        }
    };


    FX.Sidebar = {
        isSidebar: false,
        activeTab: null,

        init: function() {
            $('.js-tabs-sidebar').on('click', 'a', this.sidebarClicked );

            if($(window).width() <= 600 )
            {
                $('html').removeClass('js-sidebar');
            }
        },

        sidebarClicked: function() {
            FX.Sidebar.isSidebar = true;
        },

        toggle: function($this) {
            if( ! this.isSidebar )
                return;

            var tabText = $this.find('.tab-text').text();

            if( tabText == this.activeTab && $('html').hasClass('js-sidebar') )
            {
                $('html').removeClass('js-sidebar');
                this.isSidebar = false;
                this.activeTab = null;

                setTimeout(function(){
                    $this.parent().removeClass('active');
                    $(window).trigger('resize');
                }, 100);

                return;
            }
            else
            {
                $('html').addClass('js-sidebar');

                setTimeout(function(){
                    $(window).trigger('resize');
                }, 100);
            }

            FX.Sidebar.activeTab = tabText;
            this.isSidebar = false;
        }
    }


    FX.Tabs = {
        init: function() {
            $('.tabs__nav').on('click', 'a', this.switchTab)
        },

        switchTab: function(event) {
            event.preventDefault();

            var $this = $(this),
                tab   = $($this.attr('href'));

            $this.parent()
                 .addClass('active')
                 .siblings()
                 .removeClass('active');

            tab.addClass('active')
               .siblings()
               .removeClass('active');

            FX.Sidebar.toggle($this);
        }
    }


    /* ---------------------------------------------------------------------
    Reference Links
    Toggle Slide open a hidden element
    ------------------------------------------------------------------------ */

    FX.ReferenceLinks = {
        init: function() {
            $('.reference-link').on('click', this.toggleVisible);
        },

        toggleVisible: function(event) {
            event.preventDefault();
            $($(this).data('target')).slideToggle(100);
        }
    };


    FX.Help = {
        init: function() {
            if( ! $('.js-help-tab').length )
                return;

            this.bind();
        },

        bind: function() {
            $('.js-help-tab').on('click', this.switchTab);
        },

        switchTab: function(event) {
            event.preventDefault();

            var $this = $(this),
                tab   = $($this.attr('href'));

            $this.addClass('active')
                .siblings()
                .removeClass('active');

            tab.addClass('active')
                .siblings()
                .removeClass('active');


            FX.Help.scrollDown();
        },

        scrollDown: function() {

            var windowWidth = $(window).width(),
                helpSection = $('.help-section');
                scrollTo    = ( windowWidth > 1024 )
                                ? (helpSection.offset().top - $('#page-header').height()) + 42
                                : (helpSection.offset().top + helpSection.height())

            $("html, body").animate({
                scrollTop: scrollTo
            });
        }
    }



    /* ---------------------------------------------------------------------
    Password Prefill
    Fills the password input with "Password"
    (prevents text from displaying as asterisks)
    ------------------------------------------------------------------------ */
    FX.PasswordPreFill = {

        init: function() {

            if ( $('#password').length < 1 )
                return;

            element = document.getElementById('password');
            text_to_show = 'Password';

            element.type     = "text";       // set the type to text for the first time
            element.value    = text_to_show; // set the message for the first time
            element.onfocus = function() {
                if (this.value == text_to_show) {
                    this.type  = "password";
                    this.value = '';
                }
            }
            element.onblur = function() {
                if (this.value == '') {
                    this.type  = "text";
                    this.value = text_to_show;
                }
            }
        }
    }

    /* ---------------------------------------------------------------------
    Slideshows
    Royal Slider slideshows
    ------------------------------------------------------------------------ */

    FX.Slider = {
        options: {
            imageScalePadding:          0,
            slidesSpacing:              0,
            arrowsNav:                  true,
            loop:                       true,
            addActiveClass:             true,
            fadeinLoadedSlide:          true,
            controlNavigation:          "bullets",
            imageAlignCenter:           true,
            visibleNearby: {
                enabled:                false,
                centerArea:             1,
                center:                 true,
                breakpoint:             0,
                breakpointCenterArea:   0,
                navigateByCenterClick:  false,
            },
            autoplay: {
                enabled:                true,
                delay:                  5000,
                pauseOnHover:           false,
            },
            thumbs: {
                arrows:                 false,
                autoCenter:             false,
                fitInViewport:          false,
                spacing:                15,
            }
        },

        init: function() {
            var self = FX.Slider;

            if($('#masthead--homepage').length) {
                $(window).on('load', this.onLoad);
                $(window).on('resize', this.onResize);
            }

            $('.royalSlider').each(function() {

                var $this = $(this);

                self.options.imageScaleMode = $this.data('scale');

                if ($this.parents('.deals-slider').length) {
                    self.options.autoScaleSlider = true;
                    //self.options.imgWidth = 800;
                    self.options.autoScaleSliderHeight = 400;
                    self.options.autoHeight = true;
                }

                $this.royalSlider(self.options).on('rsAfterSlideChange', function() {
                    $(window).trigger('resize');
                });

            });
        },

        onLoad: function() {
            var h = $(window).height();
            $('#masthead--homepage').css({"height": h+'px'});
        },

        onResize: function() {
            var h = $(window).height();
            $('#masthead--homepage').css({"height": h+'px'});
        }

    };


    FX.Scrollers = {
        init: function() {

            $('.js-large-scroller').sly({
                horizontal: 1
                ,itemNav: 'basic'
                ,smart: 1
                ,scrollBar: $('.js-large-scroller-scrollbar')
                ,dragHandle: 1
                ,dynamicHandle: 1
                ,clickBar: 1

                ,mouseDragging: 1
                ,touchDragging: 1

                ,prevPage: $('.js-large-scroller-prev')
                ,nextPage: $('.js-large-scroller-next')
           });

            $(window).on('resize', this.onResize)
        },

        onResize: function(event) {
            $('.js-large-scroller').sly('reload');
        }
    };


    /* ---------------------------------------------------------------------
    Find-a-Rep Form
    Remove default text on focus.
    ------------------------------------------------------------------------ */
    FX.RepSearch = {

        init: function()
        {
            var self = FX.RepSearch;

            if ( $('#find-rep-search').length < 1 )
                return;

            self.bind();
        },

        bind: function() {

            var self = FX.RepSearch;
            $('#zipcode').on('focus focusout', self.detectValue );
        },

        detectValue: function() {

            var self = FX.RepSearch;

            if ( $('#zipcode').val() == 'Zip Code' )
                self.clearValue();
            else if ( $('#zipcode').val() == '' )
                self.addDefault();
        },

        clearValue: function() {
            $('#zipcode').val('');
        },

        addDefault: function() {
            $('#zipcode').val('Zip Code');
        }


    };


    /* ---------------------------------------------------------------------
    PartSearch Form
    Hide/Show form elements.
    ------------------------------------------------------------------------ */

    FX.PartSearchForm = {

        init: function()
        {
            var self = FX.PartSearchForm;
            if ( ! $('#search-parts').length && ! $('#buy-parts').length )
                return;

            self.detectValue();
            self.bind();
        },

        bind: function()
        {
            var self = FX.PartSearchForm;

            $('#looking-for').on('change', self.detectValue );
        },

        detectValue: function()
        {
            var self = FX.PartSearchForm;

            if ( $('#looking-for').val() == 'Parts Locations' )
                $('.get_zip').removeAttr('disabled');
            /*else
                $('.get_zip').attr('disabled', 'disabled');*/
        }
    };



    /* ---------------------------------------------------------------------
    Rental Form
    Hide/Show form elements.
    ------------------------------------------------------------------------ */

    FX.RentalForm = {

        init: function()
        {
            var self = FX.RentalForm;
            if ( !$('#rental-type').length )
            {
                return;
            }

            self.detectValue();
            self.bind();
        },

        bind: function()
        {
            var self = FX.RentalForm;

            $('#rental-type').on('change', self.detectValue );
        },

        detectValue: function()
        {
            var self = FX.RentalForm;

            if ( $('#rental-type').val() == 'Construction' )
                self.showConstructionFamilies();
            else
                self.showPowerFamilies();
        },

        showConstructionFamilies: function()
        {
            $('#power-fam').hide()
                           .find('select')
                           .attr('disabled', 'disabled');

            $('#construction-fam').show()
                                  .find('select')
                                  .removeAttr('disabled')
                                  .selectric('refresh');
        },

        showPowerFamilies: function()
        {
            $('#construction-fam').hide()
                                  .find('select')
                                  .attr('disabled', 'disabled');

            $('#power-fam').show()
                           .find('select')
                           .removeAttr('disabled')
                           .selectric('refresh');
        }

    }


    /* ---------------------------------------------------------------------
    Find A Rep/Location
    Location functionality.
    ------------------------------------------------------------------------ */

    FX.ClosestLocation = {
        url: '/company/locations/api/getClosest',
        lat: null,
        lng: null,
        initialized: false,

        init: function()
        {
            // return if there is no location selector
            if( !$('#js-closest-location').length && !$('.get_zip').length )
                return;

            this.setup();
            this.bind();
        },

        bind: function() {
            $('.js-help-tab').on('click', this.triggerGetLocation );
        },

        setup: function()
        {
            var self = this;
            if (navigator.geolocation)
            {
                navigator.geolocation.getCurrentPosition(function(position)
                {
                    self.lat = position.coords.latitude
                    self.lng = position.coords.longitude;

                    if ( $('.get_zip').length )
                        self.fetchZIP();

                    if ( $('#js-closest-location').length )
                        self.fetch();

                });
            }

            self.initialized = true
        },

        fetch: function()
        {
            var self = this;
            $.ajax({
                type: "POST",
                dataType: "json",
                url: self.url,
                data: {lat: self.lat, lng: self.lng}
            })
            .complete( function (xhr, status) {
                if (status === 'error' || !xhr.responseText) {
                    self.renderError();
                }
                else {
                    var data = xhr.responseText;
                    self.render( data );

                }
            });

        },

        fetchZIP: function()
        {
            var self = FX.ClosestLocation;

            zipURL = '/company/locations/api/getZip'

            $.ajax({
                type: "POST",
                dataType: "json",
                url: zipURL,
                data: {lat: self.lat, lng: self.lng}
            })
            .complete( function (xhr, status) {
                if (status === 'error' || !xhr.responseText) {
                }
                else {
                    var data = xhr.responseText;
                    self.renderZIP( data );
                }
            });

        },

        render: function(data)
        {
            $('#js-closest-location').html(data);
        },

        renderZIP: function(data)
        {
            $('input.get_zip, input.zipcode').val(data);
        },

        renderError: function()
        {
            $('#js-closest-location')
                .html( 'Thank you for your interest in Whayne CAT.<br>Your zipcode falls outside of our territory please contact us at 1-800-494-2963 and we are happy to answer any questions you may have.' );
        },

        triggerGetLocation: function(event) {
            var self = FX.ClosestLocation;

            if( ! self.initialized )
                self.setup();
        }

    }

    /* ---------------------------------------------------------------------
    Equipment Images
    ------------------------------------------------------------------------ */

    FX.EquipmentImages = {
        scroller: null,

        init: function()
        {
            $('.product__thumbnail').magnificPopup({
                type: 'image',
                gallery: {
                  enabled:true
                }
            });

           this.scroller = $('.js-thumbnails-scroller').sly({
                horizontal: 1
                ,itemNav: 'basic'
                ,smart: 1
                ,scrollBar: $('.js-thumbnails-scroller-scrollbar')
                ,dragHandle: 1
                ,dynamicHandle: 1
                ,clickBar: 1

                ,mouseDragging: 1
                ,touchDragging: 1

                ,prevPage: $('.js-thumbnails-scroller-prev')
                ,nextPage: $('.js-thumbnails-scroller-next')
           });

           $(window).on('resize', this.onResize).trigger('resize');
        },

        onResize: function(event) {
            var width = 0,
                $thumbnails = $('.product__thumbnails');

            $thumbnails.find('img')
                       .each(function(){
                            width += $(this).width();
                       });

            if(width > $thumbnails.width()) {
                $('.js-thumbnails-scroller-scrollbar').fadeIn('fast');
            } else {
                $('.js-thumbnails-scroller-scrollbar').fadeOut('fast');
            }

            FX.EquipmentImages.scroller.sly('reload');
        }
    };


    /* ---------------------------------------------------------------------
    Equipment Videos
    ------------------------------------------------------------------------ */

    FX.EquipmentVideos = {

        init: function()
        {
           $('.product__video').magnificPopup({
                type: 'iframe',
                gallery: {
                  enabled:true
                },
                iframe: {
                    patterns: {
                        youtube: {
                            index: 'youtube.com/', // String that detects type of video (in this case YouTube). Simply via url.indexOf(index).

                            id: function(url){

                                var segments = url.split('v='),
                                id = segments[1];

                                segments = id.split('&');
                                id = segments[0];

                                return id;
                            },
                            src: '//www.youtube.com/embed/%id%' // URL that will be set as a source for iframe.
                        },

                        youtube2: {
                            index: 'youtu.be/', // String that detects type of video (in this case YouTube). Simply via url.indexOf(index).

                            id: function(url){

                                var segments = url.split('.be/'),
                                    id = segments[1];

                                return id;
                            },
                            src: '//www.youtube.com/embed/%id%' // URL that will be set as a source for iframe.
                        }
                    }
                }
            });
        }
    };

    /* ---------------------------------------------------------------------
    Reset Filters
    ------------------------------------------------------------------------ */

    FX.ResetFilters = {

        init: function()
        {
            this.bind();
        },

        bind: function()
        {
            $('input[type="reset"]').on( 'click', this.clearFields );
        },

        clearFields: function()
        {

            setTimeout( function(){

                $('select').each( function() {
                    var $this = $(this);
                    $this.trigger('update.fs');
                });

            }, 50);

            // reset all text values to ''
            $('input[type="text"]').val('');

            $('.get_zip').attr('disabled', 'disabled');

        }
    };


    /* ---------------------------------------------------------------------
    Equipment VPTs
    ------------------------------------------------------------------------ */

    FX.EquipmentVPTs = {
        el: null,

        init: function()
        {
            $('.product__vpt').magnificPopup({
                items: {
                    src: '#product__vpts',
                    type: 'inline'
                },
                showCloseBtn: true
            });
        }
    };


    /* ---------------------------------------------------------------------
    Expandables
    Toggle Slide open a hidden element
    ------------------------------------------------------------------------ */

    FX.Expandable = {
        init: function() {
            $('.expandable__block-inner').on('click', this.toggleVisible);
            $('.expandable__button--close').on('click', this.close);
        },

        toggleVisible: function(event) {
            event.preventDefault();

            var toExpand     = $(this).closest('.expandable'),
                lastExpanded = ( toExpand.hasClass('open'))
                                 ? toExpand
                                 : toExpand.siblings('.open');

            var more   =  toExpand.find('.expandable__more'),
                height = more.outerHeight(),
                offset = toExpand.position();


            more.css('margin-left', -(offset.left));

            if( ! toExpand.hasClass('open') )
            {
                toExpand.animate({
                    'margin-bottom': height
                    },
                    300, function() {
                        toExpand.addClass('open');
                        $(window).trigger('FX.HeightChanged');
                });
            }

            lastExpanded.removeClass('open');
            lastExpanded.animate({ 'margin-bottom': 0 }, 300 );

        },

        close: function(event) {
            event.preventDefault();

            var toClose = $(this).closest('.expandable');

            toClose
                .removeClass('open')
                .animate({
                    'margin-bottom': 0
                }, 300, function() {
                    $(window).trigger('FX.HeightChanged');
            });

        }
    };


    /* ---------------------------------------------------------------------
    FX.FitVids
    Plugin for responsive embedded videos
    ------------------------------------------------------------------------ */

    FX.FitVids = {

        init: function()
        {
            $(".responsive-video").fitVids({ customSelector: "iframe[src^='http://s7d2.scene7.com']"});
        }

    };


    FX.UsedParts = {
        form: null,
        items: [],
        list: null,

        init: function() {
            if( ! $('.js-parts-search-form').length )
                return;

            this.form = $('.js-parts-search-form');
            this.list = $('.js-parts tbody').find('tr');
            this._setupItems();
            this.bind();
        },

        bind: function() {
            this.form.on('submit', this._onFormSubmit);
            $('.js-reset').on('click', this._onFormReset);
        },

        search: function(value, prop) {
            var f = new Fuse(this.items, { threshold: .1, keys: [ prop ], id: 'id' });

            results = f.search(value);

            this.list.addClass('hidden');

            if( ! results.length ) {
                $('.js-no-results').removeClass('hidden');
            }

            $.each(results, function(i, v) {
                FX.UsedParts.list.eq(v-1).removeClass('hidden');
            });

            $('.js-parts').trigger('repaginate');
        },

        _setupItems: function(){
            var self = this;

            $('.js-parts tbody').find('tr').each(function(i, v){
                var item = { id: i+1 };

                $(this).children('td').each(function(){
                    var td = $(this);
                    item[td.data('prop')] = String( $.trim(td.text()) );
                });

                self.items.push(item);
            });
        },

        _onFormSubmit: function(event) {
            event.preventDefault();

            var self = FX.UsedParts,
                data = self.form.serializeArray();

            $('.page-number').first().trigger('click');
            $('.js-no-results').addClass('hidden');

            if( data[0].value !== '' )
                self.search(data[1].value, data[0].value)
            else
                self.list.removeClass('hidden');

            $('.js-reset').removeClass('hidden');
            $('.pager').hide();
        },

        _onFormReset: function(event) {
            event.preventDefault();
            $(this).addClass('hidden');
            $('.js-no-results').addClass('hidden');

            FX.UsedParts.list.removeClass('hidden');
            $('.pager').show();
            $('.page-number').first().trigger('click');
        }
    };

    FX.TablePaginate = function() {
        $('table.paginated').each(function() {

            var currentPage = 0;
            var numPerPage = 30;
            var $table = $(this);

            $table.on('repaginate', function() {
                $table.find('tbody tr').not('.hidden').hide().slice(currentPage * numPerPage, (currentPage + 1) * numPerPage).show();
            });

            $table.trigger('repaginate');

            var numRows = $table.find('tbody tr').not('.hidden').length;
            var numPages = Math.ceil(numRows / numPerPage);
            var $pager = $('<div class="pager"></div>');

            for (var page = 0; page < numPages; page++) {

                $('<span class="page-number"></span>').text(page + 1).data('page', page).appendTo($pager).addClass('clickable');
            }

            $pager.insertAfter($table).find('span.page-number:first').addClass('active');

            $('body').on('click', '.page-number', { newPage: page }, function(event) {
                currentPage = $(this).data('page');

                $table.trigger('repaginate');
                $(this).addClass('active').siblings().removeClass('active');
            });
        });
    };



    /* ---------------------------------------------------------------------
    FX.ImAHuman
    Plugin for responsive embedded videos
    ------------------------------------------------------------------------ */
    FX.ImAHuman = {
        num: "0xFF9481",
        forms: void 0,

        init: function() {
            this.setup()
        },

        setup: function() {
            this.forms = document.getElementsByTagName("form");
            this.bind();
        },

        bind: function() {
            for (var i = 0; this.forms.length > i; i++) {
                $(this.forms[i]).on("focus click", this.markAsHuman);
            }
        },

        markAsHuman: function() {
            $(this).find(".imahuman").attr("value", parseInt(FX.ImAHuman.num, 16))
        }
    }

    FX.Locations = {
        lat: null,
        lng: null,
        url: '/company/locations/api/index',
        collection: [],
        scrollbar: null,

        init: function() {

            if($.cookie('whaynecat_location')){
                var location = JSON.parse($.cookie('whaynecat_location'));
                this.lat = location.lat;
                this.lng = location.lng;
                this.get();
            }
            else if (navigator.geolocation)
                this.bind();
            else
                this.get();

            this.bind();
            this.preloadIconImages();

            this.LocationMap = new FX.Locations.Map('js-locations-gmap');
            this.list        = new FX.Locations.List('js-locations-list');
            $('#js-zip-search-btn').on('click', this.search);

            setTimeout(function(){
                if(FX.Locations.lat === null){
                    FX.Locations.get();
                }
            }, 10000);
        },

        bind: function() {
            navigator.geolocation.getCurrentPosition(this.geoPosition, this.get);
        },

        geoPosition: function(position) {
            var self = FX.Locations;

            self.lat = position.coords.latitude;
            self.lng = position.coords.longitude;
            self.get();
        },

        get: function() {
            var self     = FX.Locations;

            if(self.lat !== null && self.lat !== '')
            {
                $.ajax({
                    url: self.url,
                    type: 'POST',
                    data: {lat: self.lat, lng: self.lng},
                })
                .done(FX.Locations.loaded)
                .fail(function(xhr){
                    FX.Locations.loaded(xhr.responseJSON);
                });

            } else {
                $.get( self.url )
                 .done(FX.Locations.loaded)
                 .fail(function(xhr){
                    FX.Locations.loaded(xhr.responseJSON);
                 });
            }
        },

        search: function(event) {

            event.preventDefault();

            $.ajax({
                url: '/company/locations/api/search',
                type: 'POST',
                data: { zip: $('#js-zip-search').val() },
            })
            .done(FX.Locations.loaded)
            .fail(function(xhr){
                FX.Locations.loaded(xhr.responseJSON);
            });
        },

        loaded: function(data) {

            console.log( data );
            if ( data )
                FX.Locations.collection = data;

            $(window).trigger('FX.Locations.Loaded');
            $('.locations__sidebar').scrollTop(0);


            FX.Locations.lat = data[0].lat;
            FX.Locations.lng = data[0].lng;
            $.cookie('whaynecat_location', JSON.stringify(data[0]), { path: '/' });
        },

        preloadIconImages: function() {

            var drops = [
                '/wp-content/themes/whaynecat/assets/img/location-standard.png'
                ,'/wp-content/themes/whaynecat/assets/img/location-standard-active.png'
                ,'/wp-content/themes/whaynecat/assets/img/location-hq.png'
                ,'/wp-content/themes/whaynecat/assets/img/location-partsdrop.png'
            ];

            for(var i=0; i < drops.length; i++)
            {
                var img = new Image();
                    img.src = drops[i];
            }
        },

        updateScrollbar: function(event) {
            if(FX.Locations.scrollbar) {
                setTimeout(function(){
                    FX.Locations.scrollbar.update("relative");
                }, 1000);
            }
        }
    };

    FX.Locations.Map = function(id, options) {

        if(! $('#'+id).length)
            return false;

        this.id = id;
        this.markers = [];
        this.currentOpenMarker = null;
        this.infoWindow = null;
        // this.style = [{featureType:"administrative.province",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"administrative.province",elementType:"geometry.fill",stylers:[{visibility:"on"},{hue:"#ffcc00"},{saturation:"69"}]},{featureType:"administrative.province",elementType:"geometry.stroke",stylers:[{visibility:"on"},{hue:"#ffcc00"},{saturation:"58"}]},{featureType:"landscape",elementType:"all",stylers:[{saturation:-100},{lightness:65},{visibility:"on"}]},{featureType:"poi",elementType:"all",stylers:[{saturation:-100},{lightness:51},{visibility:"simplified"}]},{featureType:"road.highway",elementType:"all",stylers:[{saturation:-100},{visibility:"simplified"}]},{featureType:"road.arterial",elementType:"all",stylers:[{saturation:-100},{lightness:30},{visibility:"on"}]},{featureType:"road.local",elementType:"all",stylers:[{saturation:-100},{lightness:40},{visibility:"on"}]},{featureType:"transit",elementType:"all",stylers:[{saturation:-100},{visibility:"simplified"}]},{featureType:"water",elementType:"geometry",stylers:[{hue:"#ffff00"},{lightness:-25},{saturation:-97}]},{featureType:"water",elementType:"labels",stylers:[{visibility:"on"},{lightness:-25},{saturation:-100}]}];

        this.mapOptions = $.extend({
            center: new google.maps.LatLng(38.53979, -90.44015),
            disableDefaultUI: false,
            zoom: 8,
            scrollwheel: false,
            // styles: this.style
        }, options );

        // Marker Template
        this.template = _.template($('#markerTemplate').html());

        // create the map el
        this.el = new google.maps.Map(document.getElementById(this.id), this.mapOptions);


        // create the info window
        this.infoWindow = new InfoBubble({
            backgroundClassName: 'infowindow-wrapper'
            ,backgroundColor: '#000'
            ,padding: 0
            ,width: 250
            ,borderWidth: 0
            ,borderRadius: 0
            //,hideCloseButton: true
            ,shadowStyle: 0
        });

        //this.infoWindow = new google.maps.InfoWindow();

        this.bind();
    }


    FX.Locations.Map.prototype.bind = function(){
        $(window).on('FX.Locations.Loaded', $.proxy(this.render, this));
        $(window).on('FX.MapList.Clicked', $.proxy(this.switchActiveMarker, this));
        $('#js-service-list-select').on('change', $.proxy(this.filterMapMarkers, this));
    };


    FX.Locations.Map.prototype.render = function(event) {

        if(! FX.Locations.collection.length) return;

        var location = FX.Locations.collection[0];
        this.el.setCenter(new google.maps.LatLng(location.lat, location.lng));

        this.deleteMarkers();
        this.createMarkers(FX.Locations.collection);
        this.filterMapMarkers();

        new google.maps.event.trigger( this.markers[0], 'click' );
    }

    /**
     * create map markers out of array of data
     * @param  array collection array of objects
     * @return void
     */
    FX.Locations.Map.prototype.createMarkers = function(collection) {

        for (var i = 0; i < collection.length; i++)
        {
            collection[i].index = i;
            this.createMarker(collection[i], i);
        }
    };

    /**
     * create the individual marker
     * @param  object obj location object
     * @return void
     */
    FX.Locations.Map.prototype.createMarker = function(obj) {

        var map = this;

        var dropTypes = {
            normal: {
                url: '/wp-content/themes/whaynecat/assets/img/location-standard.png',
                origin: new google.maps.Point(0,0),
            },
            active: {
                url: '/wp-content/themes/whaynecat/assets/img/location-standard-active.png',
                origin: new google.maps.Point(0,0),
            },
            hq: {
                url: '/wp-content/themes/whaynecat/assets/img/location-hq.png',
                origin: new google.maps.Point(0,0),
            },
            parts: {
                url: '/wp-content/themes/whaynecat/assets/img/location-partsdrop.png',
                origin: new google.maps.Point(0,0),
            }
        }


        // Display the various types of icons
        // Headquarters, PartsDrop, and standard
        if (obj.name == "Whayne CAT Headquarters") {
            var drop = dropTypes.hq;
        }

        // No services defined, standard marker
        else if (obj.services == false) {
            var drop = dropTypes.normal;
        }

        // Services are defined
        // If one is a 'Drop Box', set the marker accordingly
        else {
            var drop = dropTypes.normal;

            for (var service in obj.services) {
                if (obj.services[service].name == "Drop Box") {
                    drop = dropTypes.parts;
                    break;
                }
            }
        }

        var marker = new google.maps.Marker({
            animation: google.maps.Animation.DROP
            ,position: new google.maps.LatLng(obj.lat, obj.lng)
            ,html: map.template(obj)
            ,index: map.markers.length
            ,icon: drop
        });


        google.maps.event.addListener(marker, "click", function() {

            map.infoWindow.close();

            if(map.currentOpenMarker !== this.index) {
                map.infoWindow.setContent(this.html);
                map.infoWindow.open(map.el, this);
                map.currentOpenMarker = this.index;
            } else {
                map.currentOpenMarker = null;
            }

            if(FX.Locations.list) {
                $(window).trigger('FX.MapMarker.Clicked', [ this.index ] );
            }
        });

        map.markers.push(marker);
    }

    /**
     * Shows any markers currently in the array.
     */
    FX.Locations.Map.prototype.showMarkers = function() {

        var filter = $('#js-service-list-select').val() || '';

        if( filter == '')
            this._setMapMarkers(this.el);
        else
            this.filterMapMarkers();
    }


    /**
     * Removes the markers from the map, but keeps them in the array.
     */
    FX.Locations.Map.prototype.clearMarkers = function() {
        this._setMapMarkers(null);
    }


    /**
     * Deletes all markers in the array by removing references to them.
     */
    FX.Locations.Map.prototype.deleteMarkers = function() {

        this.clearMarkers();
        this.markers = [];
        this.currentOpenMarker = null;
    }

    /**
     * Adds markers to a map
     * used to show the markers on a map
     * @param object|null map the map to place the markers on or null to remove markers from map
     */
    FX.Locations.Map.prototype._setMapMarkers = function($map) {
        for (var i = 0; i < this.markers.length; i++) {
            this.markers[i].setMap($map);
        }
    }


    FX.Locations.Map.prototype.filterMapMarkers = function() {

        var filter = $('#js-service-list-select').val();

        if( filter == '' || typeof filter === 'undefined' ){
            this._setMapMarkers(this.el);
            return;
        }

        for (var i = 0; i < this.markers.length; i++) {

            var location = FX.Locations.collection[i];

            if( typeof _.findWhere(location.services, {'slug': filter}) === 'undefined' )
                this.markers[i].setMap(null);
            else
                this.markers[i].setMap(this.el);
        }
    }


    FX.Locations.Map.prototype.switchActiveMarker = function(event, index) {
        new google.maps.event.trigger( this.markers[index], 'click' );
    }



    FX.Locations.List = function(id, options) {

        if(! $('#'+id).length)
            return false;

        this.id = id;
        this.el = $('#'+id);
        this.template = _.template($('#listTemplate').html())
        this.filtered = false;

        this.bind();
    }


    FX.Locations.List.prototype.bind = function(){
        $(window).on('FX.Locations.Loaded', $.proxy(this.filter, this));
        $(window).on('FX.MapMarker.Clicked', $.proxy(this.toggleActiveItem, this));
        $('body').on('click', '.location__title', this.itemMadeActive);
        $('#js-service-list-select').on('change', $.proxy(this.filter, this));
    };


    FX.Locations.List.prototype.render = function(event, collection){

        var list = this;
        collection = FX.Locations.collection;

        list.el.empty();

        _.map(collection, function(location, i){
            _.defaults(location, {index: i});
            list.el.append( list.template(location) );
        });
    }

    FX.Locations.List.prototype.filter = function(){

        var list = this,
            collection = [],
            filter = $('#js-service-list-select').val();

        if(filter == ''){
            list.filtered = false;
            this.render(null, FX.Locations.collection);
            return;
        }

        list.filtered = true;

        _.map(FX.Locations.collection, function(location, i){

            if( _.findWhere(location.services, {'slug': filter}) )
                collection.push(location);
        });

        this.render(null, collection);
        this.el.children('li')
               .first()
               .children('.location__title')
               .trigger('click');
    }


    FX.Locations.List.prototype.toggleActiveItem = function(event, index){
        var item = this.el.children('[data-index="'+index+'"]');

        item.addClass('open')
            .siblings('.open')
            .removeClass('open');

        if(item.length)
        {
            setTimeout(function(){
                $('.locations__sidebar').animate({
                    scrollTop: $('.locations__sidebar').scrollTop() + item.position().top
                }, 300 );
            }, 600);

        }

    }


    FX.Locations.List.prototype.itemMadeActive = function(event){
        var $this = $(this);

        $this.parent()
             .addClass('open')
             .siblings('.open')
             .removeClass('open');

        $(window).trigger('FX.MapList.Clicked', [$this.parent().data('index')]);
    }



    /**
     * Fire Loader right away.
     */
    FX.Loader.init();

    /**
     * Doc Ready
     */
    $(function() {
        // FX.AjaxPages.init();
        FX.Header.init();
        FX.SiteSearch.init();
        FX.Social.init();
        FX.Sidebar.init();
        FX.Tabs.init();
        FX.ToTop.init();
        FX.ReferenceLinks.init();
        FX.Help.init();
        FX.PasswordPreFill.init();
        FX.Slider.init();
        FX.Scrollers.init();
        FX.ClosestLocation.init();
        FX.RentalForm.init();
        FX.PartSearchForm.init();
        FX.EquipmentImages.init();
        FX.EquipmentVideos.init();
        FX.EquipmentVPTs.init();
        FX.Expandable.init();
        FX.FitVids.init();
        FX.RepSearch.init();
        FX.ResetFilters.init();
        FX.UsedParts.init();
        FX.TablePaginate();
        FX.ImAHuman.init();
        FX.Locations.init();



        $('input').iCheck();
        $('select').selectric().on('change', function() {
            var Selectric = $(this).data('selectric');
                Selectric.refresh();
        });

        $banner = $('.banner-slider');
        if( $banner.length ) {

            $banner.slick({
                arrows: true,
                dots: false,
                autoplaySpeed: 6000,
                autoplay: true,
                slidesToShow: 1
            });

        }



        $(window).on('CSE::afterRender', function(event) {
            event.preventDefault();
            $('.page-content select').selectric().on('change', function() {
                var Selectric = $(this).data('selectric');

                if( typeof Selectric.refresh !== "undefined"  ) {
                    Selectric.refresh();
                }
            });
        });

        $('.js-more input').on('ifChanged', function(event) {
            $(this).parents('.bg--grey').next().toggleClass('hidden');
        });


        $('.product-specs--toggle').on('click', function(event) {
            $(this).next('dl').toggleClass('expanded');
            $(this).toggleClass('expanded');
        });

        $('.feature__toggle').on('click', function(event) {
            $(this).next('.feature__details').toggleClass('expanded');
            $(this).toggleClass('expanded');
        });

        /* jQuery Validation */
        $.validator.addMethod("zipcode", function(value, element) {
          return this.optional(element) || /^\d{5}(?:-\d{4})?$/.test(value);
        }, "Please provide a valid zipcode.");


        $("#find-rep-search").validate({
            rules: {
                'zipcode': {
                    required: true,
                    zipcode: true
                }
            }
        });

        $("#search-parts form").validate({
            rules: {
                zipcode: {
                    required: function(element) {
                        return $('#looking-for').val() == 'Parts Locations';
                    }
                }
            }
        });

        $("#buy-parts form").validate({
            rules: {
                zipcode: {
                    required: function(element) {
                        return $('#looking-for').val() == 'Parts Locations';
                    }
                }
            }
        });


        /* ---------------------------------------------------------------------
        Mobile Menu Toggle
        ------------------------------------------------------------------------ */
        $('.menu-toggle').click( function() {
            $('.menu-toggle, .nav--main, #masthead').toggleClass('active');
        });





        /* ---------------------------------------------------------------------
        Mobile - Main Nav Toggles
        ------------------------------------------------------------------------ */
        $('.nav--primary').after('<span class="main-menu-toggle icon-menu desk--hide"></span>');

        $('.main-menu-toggle').click( function() {
            $('.nav--primary').toggleClass('active');
        });


        /* ---------------------------------------------------------------------
        Mobile - Subnav Menu Toggles
        ------------------------------------------------------------------------ */
        $('.nav--primary li.menu-item-has-children > a, .nav--primary li.menu-item-type-custom > a, .menu--tools .menu li.menu-item-has-children > a, .industry-menu > ul > li.menu-item-has-children > a').after('<span class="sub-menu-toggle icon-arrow-down desk--hide"></span>');


        $('.sub-menu-toggle').click( function() {
            var $this = $(this),
                $parent = $this.parent("li"),
                $wrap = $parent.children(".sub-menu");
            $wrap.toggleClass("toggled");
            $parent.toggleClass("toggled");
            $this.toggleClass("toggled");
        });


        $( ".wysiwyg-section table" ).wrap( "<div class='wysiwyg-table'></div>" );



        /* =========== Analytics Events =========== */

        // homepage forms.
        $('#search-equipment-row form').on('submit', function (e) {
            var $form = $(this).serialize();
            ga('send', 'event', 'Search Equipment Form', 'submit', $form );
        });
        $('#rent-equipment form').on('submit', function (e) {
            var $form = $(this).serialize();
            ga('send', 'event', 'Search Rentals Form', 'submit', $form );
        });
        $('#buy-parts form').on('submit', function (e) {
            var $form = $(this).serialize();
            ga('send', 'event', 'Search Parts Form', 'submit', $form );
        });
        $('#request-service form').on('submit', function (e) {
            var $form = $(this).serialize();
            ga('send', 'event', 'Request Service Form', 'submit', $form );
        });

        // sidebar forms
        $('#search-equipment form').on('submit', function (e) {
            var $form = $(this).serialize();
            ga('send', 'event', 'Search Equipment Form (Sidebar)', 'submit', $form );
        });
        $('#search-rentals form').on('submit', function (e) {
            var $form = $(this).serialize();
            ga('send', 'event', 'Search Rentals Form (Sidebar)', 'submit', $form );
        });
        $('#search-parts form').on('submit', function (e) {
            var $form = $(this).serialize();
            ga('send', 'event', 'Search Parts Form (Sidebar)', 'submit', $form );
        });
        $('#request-service form').on('submit', function (e) {
            var $form = $(this).serialize();
            ga('send', 'event', 'Request Service Form (Sidebar)', 'submit', $form );
        });
        $('#contact-us form').on('submit', function (e) {
            var $form = $(this).serialize();
            ga('send', 'event', 'Contact Us Form (Sidebar)', 'submit', $form );
        });

        jQuery('.nav--primary').find('a:contains(Cat )').each(function(){
            var $elem = jQuery(this);
            var text = $elem.text();
              $elem.text(text.replace('Cat ',''));
        });

        /* ========= END Analytics Events ========= */
        !function(e){"function"==typeof define&&define.amd?define(["jquery"],e):e("object"==typeof exports?require("jquery"):jQuery)}(function(e){function n(e){return u.raw?e:encodeURIComponent(e)}function o(e){return u.raw?e:decodeURIComponent(e)}function i(e){return n(u.json?JSON.stringify(e):String(e))}function r(e){0===e.indexOf('"')&&(e=e.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\"));try{return e=decodeURIComponent(e.replace(c," ")),u.json?JSON.parse(e):e}catch(n){}}function t(n,o){var i=u.raw?n:r(n);return e.isFunction(o)?o(i):i}var c=/\+/g,u=e.cookie=function(r,c,f){if(void 0!==c&&!e.isFunction(c)){if(f=e.extend({},u.defaults,f),"number"==typeof f.expires){var a=f.expires,d=f.expires=new Date;d.setTime(+d+864e5*a)}return document.cookie=[n(r),"=",i(c),f.expires?"; expires="+f.expires.toUTCString():"",f.path?"; path="+f.path:"",f.domain?"; domain="+f.domain:"",f.secure?"; secure":""].join("")}for(var p=r?void 0:{},s=document.cookie?document.cookie.split("; "):[],m=0,x=s.length;x>m;m++){var v=s[m].split("="),k=o(v.shift()),l=v.join("=");if(r&&r===k){p=t(l,c);break}r||void 0===(l=t(l))||(p[k]=l)}return p};u.defaults={},e.removeCookie=function(n,o){return void 0===e.cookie(n)?!1:(e.cookie(n,"",e.extend({},o,{expires:-1})),!e.cookie(n))}});


    });


    return FX;
}(FX || {}, jQuery));
