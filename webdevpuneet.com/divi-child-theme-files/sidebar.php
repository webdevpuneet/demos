<?php
if ( ( is_single() || is_page() ) && in_array( get_post_meta( get_queried_object_id(), '_et_pb_page_layout', true ), array( 'et_full_width_page', 'et_no_sidebar' ) ) ) {
?>
<?php if ( is_active_sidebar( 'sidebar-1' ) ) : ?>
<aside id="sidebar" style="width:100%;">
	<?php dynamic_sidebar( 'sidebar-1' ); ?>
</aside> <!-- end #sidebar -->
<?php endif; ?>

<?php
	return;
}

if ( is_active_sidebar( 'sidebar-1' ) ) : ?>
	<aside id="sidebar">
		<?php dynamic_sidebar( 'sidebar-1' ); ?>
	</aside> <!-- end #sidebar -->
<?php
endif;
